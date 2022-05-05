import React from "react";

const Blogs = () => {
  return (
    <div>
      <div>
        <h1> Difference between javascript and nodejs</h1>
        <p>
          JavaScript is a language. node.js is not a language or a special
          dialect of JavaScript - it's just a thingamabob that runs normal
          JavaScript. All browsers have JavaScript engines that run the
          JavaScript of web pages. Firefox has an engine called Spidermonkey,
          Safari has JavaScriptCore, and Chrome has an engine called V8. Node.js
          is simply the V8 engine bundled with some libraries to do I/O and
          networking, so that you can use JavaScript outside of the browser, to
          create shell scripts, backend services or run on hardware
          (https://tessel.io/). Shameless plug: If you like my ramblings about
          programming on Quora, you might enjoy my YouTube show: Fun Fun
          Function
        </p>
      </div>
      <div>
        <h1>When should you use nodejs and when should you use mongodb</h1>
        <p>
          Node is server side javascript framework. It is asynchronous and is
          used mainly to develop REST services which can be consumed by
          frontend. With node both client (browser code) and server both uses
          javascript language. There are many pre-built modules available.
          MongoDB is a document based NoSQL database. In terms of CAP theorem it
          falls in CP, consistent and partition tolerant by default. Records are
          stored as Bson documents in mongoDB.
        </p>
      </div>
      <div>
        <h1>Differences between sql and nosql databases.</h1>
        <h3>SQL</h3>
        <p>
          SQL databases are a type of system software that supports management,
          analysis, capturing and querying the structured data in a relational
          format.
        </p>
        <p>
          A language used to communicate with databases for storage, deletion,
          updation, insertion and retrieval of data
        </p>
        <p>SQL databases support Structured Query Languages.</p>
        <h3>NOsQL</h3>
        <p>
          NoSQL databases are a type of software that allows to maintain and
          retrieve structured, unstructured, polymorphic data for different
          purposes.
        </p>
        <p>
          A software to retrieve, store and manage scalability of databases.
        </p>
        <p>NonSQL does not have any declarative query language.</p>
      </div>
    </div>
  );
};

export default Blogs;
