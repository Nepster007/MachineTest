export const Info = (props) => {
  const { data } = props;
  let v = "";
  switch (data) {
    case "ReactJS":
      return (v =
        "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.");
    case "Angular":
      return (v =
        "AngularJS is a JavaScript-based open-source front-end web framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.");
    case "HTML":
      return (v =
        "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.");
    default:
  }
  return v;
};
