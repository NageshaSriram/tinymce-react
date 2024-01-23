import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import HTMLReactParser from "html-react-parser";

import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

import "prismjs/components/prism-java";

import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";

function App() {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (content) {
      Prism.highlightAll();
    }
  }, [content]);
  return (
    <>
      <Editor
        apiKey="jeiltvbooyoyr3fe3xt511l45gkbcj9wrq1pj5hhpfrsqmua"
        onChange={(event) => setContent(event.target.getContent())}
        init={{
          plugins:
            "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount codesample code",
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | codesample code | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
        }}
        initialValue="Welcome to TinyMCE!"
      />
      <div>
        <h1>Displaying Editor contents</h1>
        <hr />
        <br />
        <span>{HTMLReactParser(content)}</span>
      </div>
    </>
  );
}

export default App;
