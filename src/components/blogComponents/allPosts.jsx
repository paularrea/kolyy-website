import React, { useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Grid, Row, Col } from "react-flexbox-grid";
import MediaQuery from "react-responsive";
import Img from "gatsby-image";
import arrow from "../../images/icons/downArrow.png";
import "./filterDropdown.css";
import {
  post_flex,
  filter_menu,
  filter_container,
  posts_content,
  tab,
  tabTitle,
  select_style,
  disabled_style,
  filter_post,
  hide,
  flex_filtration_mobile,
} from "../../styles/blog.module.scss";

const AllPosts = () => {
  const [selected, setSelectedTab] = useState(1);
  const [dropdown, setDropdown] = useState(false);
  const onClickTab = (value) => setSelectedTab(value);

  const data = useStaticQuery(graphql`
    query filteredPosts {
      all: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { type: { eq: "blog" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              date(formatString: "YYYY MMMM Do")
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      salud: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          frontmatter: { collection: { eq: "salud" }, type: { eq: "blog" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              date(formatString: "YYYY MMMM Do")
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      educacion: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          frontmatter: { collection: { eq: "educacion" }, type: { eq: "blog" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              date(formatString: "YYYY MMMM Do")
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      curiosidades: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          frontmatter: {
            collection: { eq: "curiosidades" }
            type: { eq: "blog" }
          }
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              date(formatString: "YYYY MMMM Do")
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const allPosts = (
    <Grid>
      <Row>
        {data.all.edges.map((edge) => {
          const { frontmatter } = edge.node;
          return (
            <Col md={4} sm={6} xs={6}>
              <div
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="1000"
                className={filter_post}
                key={frontmatter.path}
              >
                <MediaQuery maxWidth={800}>
                  <Link to={frontmatter.path}>
                    <Img
                      fluid={frontmatter.featuredImage.childImageSharp.fluid}
                    />
                    <h6 style={{ margin: ".5rem 0 0 0" }}>
                      {frontmatter.title}
                    </h6>
                  </Link>
                </MediaQuery>
                <MediaQuery minWidth={800}>
                  <Link to={frontmatter.path}>
                    <Img
                      fluid={frontmatter.featuredImage.childImageSharp.fluid}
                    />
                    <h5 style={{ margin: "1rem 0 0 0" }}>
                      {frontmatter.title}
                    </h5>
                  </Link>
                  <Link to={frontmatter.path}>
                    <button>Leer m??s</button>
                  </Link>
                </MediaQuery>
              </div>
            </Col>
          );
        })}
      </Row>
    </Grid>
  );

  const saludPosts = (
    <Grid>
      <Row>
        {data.salud.edges.map((edge) => {
          const { frontmatter } = edge.node;
          return (
            <Col md={4} sm={6} xs={6}>
              <div
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="1000"
                className={filter_post}
                key={frontmatter.path}
              >
                <Link to={frontmatter.path}>
                  <Img
                    fluid={frontmatter.featuredImage.childImageSharp.fluid}
                  />
                  <h5>{frontmatter.title}</h5>
                </Link>
                <Link to={frontmatter.path}>
                  <button>Leer m??s</button>
                </Link>
              </div>
            </Col>
          );
        })}
      </Row>
    </Grid>
  );

  const educacionPosts = (
    <Grid>
      <Row>
        {data.educacion.edges.map((edge) => {
          const { frontmatter } = edge.node;
          return (
            <Col md={4} sm={6} xs={6}>
              <div
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="1000"
                className={filter_post}
                key={frontmatter.path}
              >
                <Link to={frontmatter.path}>
                  <Img
                    fluid={frontmatter.featuredImage.childImageSharp.fluid}
                  />
                  <h5>{frontmatter.title}</h5>
                </Link>
                <Link to={frontmatter.path}>
                  <button>Leer m??s</button>
                </Link>
              </div>
            </Col>
          );
        })}
      </Row>
    </Grid>
  );

  const curiosidadesPosts = (
    <Grid>
      <Row>
        {data.curiosidades.edges.map((edge) => {
          const { frontmatter } = edge.node;
          return (
            <Col md={4} sm={6} xs={6}>
              <div
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="1000"
                className={filter_post}
                key={frontmatter.path}
              >
                <Link to={frontmatter.path}>
                  <Img
                    fluid={frontmatter.featuredImage.childImageSharp.fluid}
                  />
                  <h5>{frontmatter.title}</h5>
                </Link>
                <Link to={frontmatter.path}>
                  <button>Leer m??s</button>
                </Link>
              </div>
            </Col>
          );
        })}
      </Row>
    </Grid>
  );

  return (
    <div className={filter_container}>
      {/* Filter mobile */}
      <MediaQuery maxWidth={870}>
        <div
          className={filter_menu}
          role="button"
          tabIndex={0}
          onClick={() => setDropdown(!dropdown)}
          onKeyDown={() => setDropdown(!dropdown)}
        >
          <div
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
            className={flex_filtration_mobile}
          >
            <h4 style={{ textAlign: "left", fontSize: "18px" }}>
              Filtrar post por...
            </h4>
            <div>
              <img src={arrow} alt="" />
            </div>
          </div>

          <div className={`dropdown-collapse ${dropdown ? "show" : ""}`}>
            <a
              aria-hidden="true"
              className={tab}
              onClick={() => onClickTab(1)}
              onKeyDown={() => onClickTab(1)}
            >
              <span
                className={`${tabTitle} ${
                  selected === 1 ? select_style : disabled_style
                }`}
              >
                Todo
              </span>
            </a>
            <a
              aria-hidden="true"
              className={tab}
              onClick={() => onClickTab(2)}
              onKeyDown={() => onClickTab(2)}
            >
              <span
                className={`${tabTitle} ${
                  selected === 2 ? select_style : disabled_style
                }`}
              >
                Salud
              </span>
            </a>
            <a
              aria-hidden="true"
              className={tab}
              onClick={() => onClickTab(3)}
              onKeyDown={() => onClickTab(3)}
            >
              <span
                className={`${tabTitle} ${
                  selected === 3 ? select_style : disabled_style
                }`}
              >
                Educaci??n
              </span>
            </a>
            <a
              aria-hidden="true"
              className={tab}
              onClick={() => onClickTab(4)}
              onKeyDown={() => onClickTab(4)}
            >
              <span
                className={`${tabTitle} ${
                  selected === 4 ? select_style : disabled_style
                }`}
              >
                Curiosidades
              </span>
            </a>
          </div>
        </div>
      </MediaQuery>
      {/* Desktop version */}
      <MediaQuery minWidth={870}>
        <div
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          className={filter_menu}
        >
          <a
            aria-hidden="true"
            className={tab}
            onClick={() => onClickTab(1)}
            onKeyDown={() => onClickTab(1)}
          >
            <span
              className={`${tabTitle} ${
                selected === 1 ? select_style : disabled_style
              }`}
            >
              Todo
            </span>
          </a>
          <a
            aria-hidden="true"
            className={tab}
            onClick={() => onClickTab(2)}
            onKeyDown={() => onClickTab(2)}
          >
            <span
              className={`${tabTitle} ${
                selected === 2 ? select_style : disabled_style
              }`}
            >
              Salud
            </span>
          </a>
          <a
            aria-hidden="true"
            className={tab}
            onClick={() => onClickTab(3)}
            onKeyDown={() => onClickTab(3)}
          >
            <span
              className={`${tabTitle} ${
                selected === 3 ? select_style : disabled_style
              }`}
            >
              Educaci??n
            </span>
          </a>
          <a
            aria-hidden="true"
            className={tab}
            onClick={() => onClickTab(4)}
            onKeyDown={() => onClickTab(4)}
          >
            <span
              className={`${tabTitle} ${
                selected === 4 ? select_style : disabled_style
              }`}
            >
              Curiosidades
            </span>
          </a>
        </div>
      </MediaQuery>

      <div className={posts_content}>
        <div className={`${selected !== 1 ? hide : ""}`}>
          <div className={post_flex}>{allPosts}</div>
        </div>
        <div className={`${selected !== 2 ? hide : ""}`}>
          <div className={post_flex}>{saludPosts}</div>
        </div>
        <div className={`${selected !== 3 ? hide : ""}`}>
          <div className={post_flex}>{educacionPosts}</div>
        </div>
        <div className={`${selected !== 4 ? hide : ""}`}>
          <div className={post_flex}>{curiosidadesPosts}</div>
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
