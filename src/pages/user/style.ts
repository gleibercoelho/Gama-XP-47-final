import styled from "styled-components";

export const UserDivMaster = styled.div`
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
}

li:last-child {
  margin-bottom: 0;
}

p {
  margin: 0;
  padding: 0;
}

ul > li > ul {
  margin-top: 10px;
  padding-left: 20px;
}

li > ul > li {
  border: none;
  padding: 0;
}

img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
}
`;
