
require "buildr4osgi"

require File.join(File.dirname(__FILE__), "repositories.rb")
require File.join(File.dirname(__FILE__), "dependencies.rb")

# Keep this structure to allow the build system to update version numbers.
VERSION_NUMBER = "1.0.0.107-SNAPSHOT"


#Shorten expressions
def jars(*args)
  args.collect {|arg| project(arg).package(:jar)}
end

desc "Wapama Designer"
define "wapama" do
  project.version = VERSION_NUMBER
  project.group = "org.wapama"

  desc "Wapama Editor"
  define "api" do
    compile.with SERVLET_API
    package(:bundle)
    package(:sources)
  end

  desc "Wapama BPMN2 framework"
  define "bpmn2" do
    compile.with BPMN2_LIBS, JACKSON, OSGI
    package(:jar)
    package(:sources)
  end

  desc "Wapama ExtJS UI"
  define "ext" do
    package(:bundle).include(_("src/main/webapp"), :as => "WebContent/")
    package(:sources)
  end

  desc "Wapama Editor"
  define "designer" do

    compile.with WAR_LIBS, JUNIT, project("api")
    compile.options.source = "1.5"
    compile.options.target = "1.5"

    webContent = "WebContent/"

    package(:bundle).include(_("src/main/webapp"), :as => webContent)

    read_m = ::Buildr::Packaging::Java::Manifest.parse(File.read(_("META-INF/MANIFEST.MF"))).main
    read_m["Jetty-WarFolderPath"] = webContent
    read_m["Bundle-Version"] = project.version
    package(:bundle).with :manifest => read_m

    package(:sources)
  end

  desc "Wapama File Repository"
  define "file" do
    compile.with SLF4J, SERVLET_API, project("api")
    package(:jar)
    package(:sources)
  end

  desc "Wapama Drools Repository"
  define "drools" do
    compile.with SLF4J, SERVLET_API, JACKSON, BPMN2_LIBS, project("api"), project("bpmn2"), project("designer")
    package(:jar)
    package(:sources)
  end

  desc "WAR packaging"
  define "war" do
    package(:war, :id => "wapama").include(project("designer").path_to("src/main/webapp"), :as => '.')
    package(:war, :id => "wapama").include(project("ext").path_to("src/main/webapp"), :as => '.')
    package(:war, :id => "wapama").include(project("file").path_to("src/main/webapp"), :as => '.')
    package(:war, :id => "wapama").libs = WAR_LIBS | jars("api", "file", "bpmn2", "designer")

    package(:war, :id => "wapama",:classifier => "jboss").include(project("drools").path_to("src/main/webapp"), :as => '.')
    package(:war, :id => "wapama", :classifier => "jboss").include(project("designer").path_to("src/main/webapp"), :as => '.')
    package(:war, :id => "wapama").include(project("ext").path_to("src/main/webapp"), :as => '.')
    package(:war, :id => "wapama", :classifier => "jboss").libs = WAR_LIBS_JBOSS | jars("api", "drools", "bpmn2", "designer")
  end

  desc "Wapama distribution"
  define "distrib" do

    file(_("target/doc")).enhance do

      # Generate the website by switching to the gh-pages branch.
      # Since jekyll replicates blindly the file system, and there's no easy way to control it,
      # We generate the website, then delete whatever it copied over that wasn't necessary.
      # Since we switch branches, the ignored target folders were copied over for each subproject.
      # We remove them all.
      # Now, we should make sure we never have folders with the same name in the website...
      system <<-BASH
git co gh-pages ; jekyll #{File.join(File.dirname(__FILE__), "distrib/target/doc")}
#{ project.parent.projects.collect { |proj| "rm -Rf #{File.join(File.dirname(__FILE__), "distrib/target/doc/", proj.name.split(":").last)}"}.join("\n") }
git co master
BASH
    end
    package(:zip).include _("target/doc"), :as => "doc"
    # Done with the doc.

    # Include the license
    package(:zip).include _("../LICENSE")
    # Place all artifacts under distrib, because it's fun
    package(:zip).include project("api").package(:bundle), :path => "distrib"
    package(:zip).include project("designer").package(:bundle), :path => "distrib"
    package(:zip).include project("ext").package(:bundle), :path => "distrib"
    package(:zip).include project("file").package(:jar), :path => "distrib"
    package(:zip).include project("war").package(:war, :id => "wapama"), :path => "distrib"
    package(:zip).include project("war").package(:war, :id => "wapama", :classifier => "jboss"), :path => "distrib"

    # Add the sources too
    package(:zip).include project("api").package(:sources), :path => "src"
    package(:zip).include project("designer").package(:sources), :path => "src"
    package(:zip).include project("ext").package(:sources), :path => "src"
    package(:zip).include project("file").package(:sources), :path => "src"
    package(:zip).include project("drools").package(:sources), :path => "src"

    # Just because ? Some people seem to appreciate putting the libs too. Not sure that's worth the trouble.
  end

end
