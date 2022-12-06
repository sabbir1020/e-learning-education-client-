import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <div>
        <h1>What is cors?</h1>
        <p>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or
          port)other than its own from which a browser should permit loading
          resources.CORS also relies on a mechanism by which browsers make a
          "preflight"request to the server hosting the cross-origin resource, in
          order to check that the server will permit the actual request. In that
          preflight the browser sends headers that indicate the HTTP method and
          headers that will be used in the actual request.
        </p>
      </div>
      <div>
        <h1>Why are you using firebase?</h1>
        <p>
          The Firebase Realtime Database lets you build rich, collaborative
          applications by allowing secure access to the database directly from
          client-side code. Data is persisted locally, and even while offline,
          realtime events continue to fire, giving the end user a responsive
          experience.
        </p>
      </div>
      <div>
        <h1>How does the private route work?</h1>
        <p>
          React Router is one of the most important components of React
          ecosystem. In this tutorial, we will learn how to build different
          types of routes including private, public, and restricted routes.
          <li>Home: a public route that everyone can access to.</li>
          <li>
            Dashboard: a private route that only authenticated user can access
            to.
          </li>
          <li>
            Sign-in: a restricted route that unauthenticated user can see. To
            explain more, we don’t want to show the sign-in page after logged in
            to the site. If the authorised user goes to the sign-in page, we
            will redirect to dashboard page
          </li>
        </p>
      </div>
      <div>
        <h1>What is Node? How does Node work?</h1>
        <p>
          Node.js is an open-source backend javascript runtime environment. It
          is used as backend service where javascript works on the server-side
          of the application. This way javascript is used on both frontend and
          backend. Node.js runs on chrome v8 engine which converts javascript
          code into machine code, it is highly scalable, lightweight, fast, and
          data-intensive.
        </p>
      </div>
    </div>
  );
};

export default Blog;
