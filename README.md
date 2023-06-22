# 2p_crosssection_viewer
Webpage with interactive plot of commonly used 2p dye cross-sections

To view: [https://raacampbell.github.io/2p_crosssection_viewer/](https://raacampbell.github.io/2p_crosssection_viewer/)


## To host on GH pages
[https://chenhuijing.com/blog/revealjs-and-github-pages/](https://chenhuijing.com/blog/revealjs-and-github-pages/)


## To help edit live HTML
[https://phcode.dev/](https://phcode.dev/)


## Running locally will require a web server
To run this web page locally, you will need an HTTP server to serve the HTML file. Running the HTML file directly from the file system won't work due to the security restrictions imposed by the browser.

The easiest way to install a local server is Python's SimpleHTTPServer. 
e.g.

```
conda create -n httpserver python=3.9
conda activate httpserver
pip install simple-http-server
```

Start the web server: 

* Navigate to the folder where your HTML file is located using the command prompt or terminal.
* Start the web server in that directory: `python -m http.server` (`-m` runs a library or module as a script)
* Access the HTML file through the local web server: Open your web browser and visit [http://localhost:8000](http://localhost:8000) 
