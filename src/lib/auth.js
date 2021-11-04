import netlifyIdentity from "netlify-identity-widget";

export const init = (callback) => {
  netlifyIdentity.on("init", (user) => {
    callback(user);
  });
  netlifyIdentity.init();
};

export const logIn = (callback) => {
  netlifyIdentity.open();
};
