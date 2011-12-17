/***************************************
 * Copyright (c) Intalio, Inc 2011
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
****************************************/
package org.wapama.web.plugin.impl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.wapama.web.plugin.IDiagramPlugin;

/**
 * A utility class to read plugins.xml files.
 *
 * @author Antoine Toulme
 *
 */
public class DiagramPluginReader {

	private static Logger _logger = LoggerFactory.getLogger(DiagramPluginReader.class);
	/**
	 *
	 * @param file
	 * @return
	 */
	public static Map<String, IDiagramPlugin> initializeLocalPlugins(File rootFolder, File file) {
        Map<String, IDiagramPlugin> local = new HashMap<String, IDiagramPlugin>();
        //we read the plugins.xml file and make sense of it.
        FileInputStream fileStream = null;
        try {
            try {
                fileStream = new FileInputStream(file);
            } catch (FileNotFoundException e) {
                throw new RuntimeException(e);
            }
            XMLInputFactory factory = XMLInputFactory.newInstance();
            XMLStreamReader reader = factory.createXMLStreamReader(fileStream);
            while(reader.hasNext()) {
                if (reader.next() == XMLStreamReader.START_ELEMENT) {
                    if ("plugin".equals(reader.getLocalName())) {
                        String source = null, name = null;
                        boolean core = false;
                        for (int i = 0 ; i < reader.getAttributeCount() ; i++) {
                            if ("source".equals(reader.getAttributeLocalName(i))) {
                                source = reader.getAttributeValue(i);
                            } else if ("name".equals(reader.getAttributeLocalName(i))) {
                                name = reader.getAttributeValue(i);
                            } else if ("core".equals(reader.getAttributeLocalName(i))) {
                                core = Boolean.parseBoolean(reader.getAttributeValue(i));
                            }
                        }
                        Map<String, Object> props = new HashMap<String, Object>();
                        while(reader.hasNext()) {
                            int ev = reader.next();
                            if (ev == XMLStreamReader.START_ELEMENT) {
                                if ("property".equals(reader.getLocalName())) {
                                    String key = null, value = null;
                                    for (int i = 0 ; i < reader.getAttributeCount() ; i++) {
                                        if ("name".equals(reader.getAttributeLocalName(i))) {
                                            key = reader.getAttributeValue(i);
                                        } else if ("value".equals(reader.getAttributeLocalName(i))) {
                                            value = reader.getAttributeValue(i);
                                        }
                                    }
                                    if(key != null & value != null)
                                        props.put(key, value);
                                }
                            } else if (ev == XMLStreamReader.END_ELEMENT) {
                                if ("plugin".equals(reader.getLocalName())) {
                                    break;
                                }
                            }
                        }
                        local.put(name, new LocalPluginImpl(name, rootFolder.getPath() + "/" + source, core, props));
                    }
                }
            }
        } catch (XMLStreamException e) {
            _logger.error(e.getMessage(), e);
            throw new RuntimeException(e); // stop initialization
        } finally {
            if (fileStream != null) { try { fileStream.close(); } catch(IOException e) {}};
        }
        return local;
    }
}
