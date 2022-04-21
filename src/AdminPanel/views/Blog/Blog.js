import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CPlaceholder,
  CRow,
} from "@coreui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { descriptionShorten, titleShorten } from "../../../helpers/shorten";
import { BlogContext } from "../../context/BlogContextProvider";
function Blog() {
  const { blog, setBlog } = useContext(BlogContext);
  const placeHolederData = [1, 2, 3, 4, 5, 6, 7, 8];
  const deletProductHandler = (e) => {
    fetch(`https://api.freerealapi.com/blogs/${e.target.name}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const selectedId = e.target.name;
        // console.log(blog.filter((item) => item._id !== selectedId));
        setBlog(blog.filter((item) => item._id !== selectedId));
      });
  };
  return (
    <>
      <CRow xs={{ cols: 1, gutter: 3 }} md={{ cols: 4 }}>
        {blog ? (
          blog.map((item) => (
            <CCol xs key={item._id}>
              <CCard>
                <CCardImage
                  orientation="top"
                  src={item.image}
                  style={{ height: "200px" }}
                />
                <CCardBody>
                  <CCardTitle>{titleShorten(item.title)}</CCardTitle>
                  <CCardText>{descriptionShorten(item.text)}</CCardText>
                  <CButton color="warning" className="me-2">
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`${item._id}`}
                    >
                      ویرایش
                    </Link>
                  </CButton>
                  <CButton
                    color="danger"
                    name={item._id}
                    onClick={deletProductHandler}
                  >
                    پاک کردن
                  </CButton>
                </CCardBody>
              </CCard>
            </CCol>
          ))
        ) : (
          <>
            {placeHolederData.map(() => (
              <CCol xs key={Math.random()}>
                <CCard style={{ width: "18rem" }}>
                  <CCardImage
                    component="svg"
                    orientation="top"
                    width="100%"
                    height="162"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                  </CCardImage>
                  <CCardBody>
                    <CPlaceholder
                      component={CCardTitle}
                      animation="glow"
                      xs={7}
                    >
                      <CPlaceholder xs={6} />
                    </CPlaceholder>
                    <CPlaceholder component={CCardText} animation="glow">
                      <CPlaceholder xs={7} />
                      <CPlaceholder xs={4} />
                      <CPlaceholder xs={4} />
                      <CPlaceholder xs={6} />
                      <CPlaceholder xs={8} />
                    </CPlaceholder>
                  </CCardBody>
                </CCard>
              </CCol>
            ))}
          </>
        )}
      </CRow>
    </>
  );
}

export default Blog;
