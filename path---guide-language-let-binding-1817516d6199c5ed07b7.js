webpackJsonp([30],{"./node_modules/json-loader/index.js!./.cache/json/guide-language-let-binding.json":function(e,a){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:60}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"What & Why",order:0}}}},{node:{relativePath:"guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Editors Plugins",order:20}}}},{node:{relativePath:"guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Extra Goodies",order:30}}}},{node:{relativePath:"guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Global Installation",order:10}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Editor Setup",order:10}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax Cheatsheet",order:1}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring",order:130}}}},{node:{relativePath:"guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Exception",order:175}}}},{node:{relativePath:"guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Function",order:100}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:20}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"More on Type",order:120}}}},{node:{relativePath:"guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"List & Array",order:80}}}},{node:{relativePath:"guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let Binding",order:10}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Overview",order:0}}}},{node:{relativePath:"guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Pattern Matching!",order:135}}}},{node:{relativePath:"guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Module",order:180}}}},{node:{relativePath:"guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Object",order:175}}}},{node:{relativePath:"guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Type!",order:15}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant!",order:70}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}}]},file:{relativePath:"guide/language/let-binding.md",childMarkdownRemark:{html:'<p>A "let binding", in other languages, might be called a "variable declaration/assignment". <code>let</code> gives names to values. They can be seen and referenced by code that comes after them.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> greeting = <span class="hljs-string">"hello!"</span>;\n<span class="hljs-keyword">let</span> score = <span class="hljs-number">10</span>;\n<span class="hljs-keyword">let</span> newScore = <span class="hljs-number">10</span> + score;\n...</code></pre>\n      </div>\n<h3 id="block-scope"><a href="#block-scope" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Block Scope</h3>\n<p>Bindings can be scoped through <code>{}</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">if</span> (displayGreeting) {\n  <span class="hljs-keyword">let</span> message = <span class="hljs-string">"Enjoying the docs so far?"</span>;\n  print_endline message;\n};\n<span class="hljs-comment">/* `message` not accessible here! */</span></code></pre>\n      </div>\n<h3 id="bindings-are-immutable"><a href="#bindings-are-immutable" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bindings Are Immutable</h3>\n<p>"Immutable" as in, "doesn\'t change". Once a binding refers to a value, it cannot refer to anything else (unless it\nexplicitly contains a mutable value, discussed later). However, you may create a new binding of the same name which <em>shadows</em> the previous binding; from that point onward, the binding will refer to the newly assigned value.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> message = <span class="hljs-string">"hello"</span>;\nprint_endline message; <span class="hljs-comment">/* Prints "hello" */</span>\n<span class="hljs-keyword">let</span> message = <span class="hljs-string">"bye"</span>;\nprint_endline message; <span class="hljs-comment">/* Prints "bye" */</span></code></pre>\n      </div>\n<h3 id="tips--tricks"><a href="#tips--tricks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tips &#x26; Tricks</h3>\n<p>Since bindings are scoped through <code>{}</code>, you can create an anonymous scope around them:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> message = {\n  <span class="hljs-keyword">let</span> part1 = <span class="hljs-string">"hello"</span>;\n  <span class="hljs-keyword">let</span> part2 = <span class="hljs-string">"world"</span>;\n  part1 ^ <span class="hljs-string">" "</span> ^ part2\n};\n<span class="hljs-comment">/* `part1` and `part2` not accessible here! */</span></code></pre>\n      </div>\n<p>This prevents misuse of the bindings after these lines.</p>\n<h3 id="design-decisions"><a href="#design-decisions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Design Decisions</h3>\n<p>Reason is backed by OCaml under the hood. a let binding, in OCaml syntax, looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> a = <span class="hljs-number">1</span> <span class="hljs-keyword">in</span>\n<span class="hljs-keyword">let</span> b = <span class="hljs-number">2</span> <span class="hljs-keyword">in</span>\na + b</code></pre>\n      </div>\n<p>This could be conceptually read in this format instead:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> a = <span class="hljs-number">1</span> <span class="hljs-keyword">in</span>\n  <span class="hljs-keyword">let</span> b = <span class="hljs-number">2</span> <span class="hljs-keyword">in</span>\n    a + b</code></pre>\n      </div>\n<p>Which might remind you of:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Reason syntax */</span>\n<span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> a<span class="hljs-params"> </span></span></span>=&gt;\n  <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> b<span class="hljs-params"> </span></span></span>=&gt;\n    a + b;</code></pre>\n      </div>\n<p>Though they\'re not strictly the same, hopefully you can see that <code>let</code> is just an expression! In Reason, we\'ve turned <code>in</code> into <code>;</code> for visual familiarity; but don\'t let that hide the underlying elegance of an expression.</p>',frontmatter:{title:"Let Binding"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/language/let-binding.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-language-let-binding-1817516d6199c5ed07b7.js.map