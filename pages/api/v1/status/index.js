const object = {
  string: "Paulo",
  2: 5,
};

function status(request, response) {
  response.status(200).json(object);
  response.status(200).json(typeof object);
}

export default status;
