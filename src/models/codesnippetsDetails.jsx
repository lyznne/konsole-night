import { DiCoffeescript } from 'react-icons/di';
import { SiRust, SiGo } from 'react-icons/si';
const codesnippetsDetails = [
    {
        langIcon: DiCoffeescript,
        filename: "server.coffee",
<<<<<<< HEAD
        codeSnippet: ``,
=======
        codeSnippet: `
        get '/hello', ->
        'Hello World'


        # Append.
        append = (location, data) ->
        path = new Pathname location
        throw new Error "Location does not exist" unless fs.existsSync(location)

        File.open path, 'a', (file) ->
            file.console.log YAML.dump data

        data`,
>>>>>>> 5913f7b (:tada: :tada: new)
    },
    {
        langIcon: SiRust,
        filename: "main.rs",
<<<<<<< HEAD
        codeSnippet: ``,
=======
        codeSnippet: `
        use std::io::BufReader;
        use std::io::prelude::*;
       
       
        let hw_file = File::open(&path).ok().expect("file not open");
        let file = BufReader::new(hw_file);
        for line in file.lines() {
            match line {
                Ok(nread) => println!("{}", nread),
                Err(e) => println!("error reading: {}", e)
            }
        }`,
>>>>>>> 5913f7b (:tada: :tada: new)
    },
    {
        langIcon: SiGo,
        filename: "httpserver.go",
<<<<<<< HEAD
        codeSnippet: ``,
=======
        codeSnippet: `
        package main
        
        func HelpHandler(response http.ResponseWriter, request *http.Request){
            HtmlFileHandler(response, request, "/help.html")
        }

        func AjaxHandler(response http.ResponseWriter, request *http.Request){
            HtmlFileHandler(response, request, "/ajax.html")
        }`,
>>>>>>> 5913f7b (:tada: :tada: new)
    },
];

export default codesnippetsDetails