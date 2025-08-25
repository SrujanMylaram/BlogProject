import React from "react";
import Banner from "./Banner/Banner";
import TrendingBLogs from "./TrendingBLogs";
import blogs from "./Utlits/DummyData";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Banner />
      <div className="home-container my-2">
        <h1 className="text-center">Welcome to home page</h1>
        <div className="all-cards d-flex justify-content-between">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="Programming.jpg"
                className="card-img-top"
                alt="Sample"
                />
              <div className="card-body">
                <Link to={'/Blogs/Programming'}>
                <h5 className="card-title">Programming</h5>
                </Link>
              </div>
            </div>
          <Link to={'/Blogs/Cooking'}>
          <div className="card" style={{ width: "18rem" }}>
            <img src="cooking.jpg" className="card-img-top" alt="Sample" />
            <div className="card-body">
              <h5 className="card-title">Cooking</h5>
            </div>
          </div>
          </Link>

          <Link to={'/Blogs/Workout'}>
          <div className="card" style={{ width: "18rem" }}>
            <img src="workout.jpg" className="card-img-top" alt="Sample" />
            <div className="card-body">
              <h5 className="card-title">Work-Out</h5>
            </div>
          </div>
          </Link>

        </div>
      </div>

      <div className="trending-container my-2">
        <h1>Trending Blogs</h1>
        <div className="trendingBlog-dev d-flex justify-content-between flex-wrap gap-4">
          {blogs.map((blog) => (
            <TrendingBLogs blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
