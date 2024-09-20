import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaRegFolderOpen, FaRegUser } from 'react-icons/fa';
import { blogData } from '@/data/blog';

const BlogAreaThree = () => {
  return (
    <div className="blog-area pd-top-120 pd-bottom-90">
      <div className="container">
        <div className="section-title">
          <div className="row">
            <div className="col-lg-7">
              <h6 className="sub-title">RECENT BLOG</h6>
              <h2 className="title">
                Customer Applications At <span>Affordable</span> Prices
              </h2>
            </div>
            <div className="col-lg-5 text-lg-end align-self-end">
              <Link className="btn btn-border-base" href="/blog">
                More Blogs
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {blogData.map(blog => (
            <div className="col-lg-4 col-md-6" key={blog.id}>
              <div className="single-blog-list">
                <div className="thumb">
                  <img className="border-radius-5" src={blog.image} alt="img" />
                  <p className="date">{blog.date}</p>
                </div>
                <div className="details">
                  <ul className="blog-meta p-0">
                    <li>
                      <FaRegUser className="mb-1" /> By {blog.author}
                    </li>
                    <li>
                      <FaRegFolderOpen className="mb-1" /> {blog.category}
                    </li>
                  </ul>
                  <h5 className="mb-4">
                    <Link href={blog.link}>
                      {blog.title}
                    </Link>
                  </h5>
                  <Link className="btn btn-border-base" href={blog.link}>
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogAreaThree;
