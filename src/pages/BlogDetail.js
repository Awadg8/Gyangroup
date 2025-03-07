import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { FadeUp, FadeDown, FadeRight } from "../components/Animation.js";

const blogPosts = [
  {
    id: 1,
    title:
      "Early Access to Sahara AI Studio Now Open: An Integrated Platform Redefining AI Development",
    description:
      "Join the Early Access Program for Sahara AI Studio. This program provides exclusive early access to an all-in-one platform designed to transform the AI development lifecycle into a streamlined, integrated experience.",
    content:
      " Today, Sahara AI proudly launches the Early Access Program for Sahara AI Studio, marking the start of the second phase of our testnet. This program provides exclusive early access to an all-in-one platform designed to transform the AI development lifecycle—from data acquisition to model development and deployment—into a streamlined, integrated experience. AI development has traditionally been fragmented, requiring developers to manage multiple tools and platforms, leading to inefficiencies and high costs. Sahara AI Studio solves these challenges by integrating the entire AI lifecycle into one platform. From finding the right model or dataset to creating and deploying RAG and non-RAG pipelines, developers can now seamlessly build, experiment, and launch AI systems in one easy-to-use platform.The Early Access Program ensures that developers worldwide, whether focused on large-scale enterprise AI or specialized projects, benefit from a streamlined, developer-first experience. By participating, developers will contribute to optimizing the platform for practical, real-world applications, making AI development faster and more effective. Participants will earn rewards for their early feedback and contributions to the platform.",
    date: "FEB 11, 2025",
    image:
      "https://sjc.microlink.io/zcQy5U1IXMstOBPYmF1w3wlXWGAIcr8gbjlBQ9gazx9jnVrOMopZZdCj2BWQyVCMvmf1hKdRXSNDcVB4BDyPMw.jpeg",

    featured: true,
  },
  {
    id: 2,
    title:
      "Early Access to Sahara AI Studio Now Open: An Integrated Platform Redefining AI Development",
    description:
      "Join the Early Access Program for Sahara AI Studio. This program provides exclusive early access to an all-in-one platform designed to transform the AI development lifecycle.",
    content:
      " Today, Sahara AI proudly launches the Early Access Program for Sahara AI Studio, marking the start of the second phase of our testnet. This program provides exclusive early access to an all-in-one platform designed to transform the AI development lifecycle—from data acquisition to model development and deployment—into a streamlined, integrated experience. AI development has traditionally been fragmented, requiring developers to manage multiple tools and platforms, leading to inefficiencies and high costs. Sahara AI Studio solves these challenges by integrating the entire AI lifecycle into one platform. From finding the right model or dataset to creating and deploying RAG and non-RAG pipelines, developers can now seamlessly build, experiment, and launch AI systems in one easy-to-use platform.The Early Access Program ensures that developers worldwide, whether focused on large-scale enterprise AI or specialized projects, benefit from a streamlined, developer-first experience. By participating, developers will contribute to optimizing the platform for practical, real-world applications, making AI development faster and more effective. Participants will earn rewards for their early feedback and contributions to the platform.",

    date: "FEB 11, 2025",
    image:
      "https://sjc.microlink.io/zcQy5U1IXMstOBPYmF1w3wlXWGAIcr8gbjlBQ9gazx9jnVrOMopZZdCj2BWQyVCMvmf1hKdRXSNDcVB4BDyPMw.jpeg",
  },
  {
    id: 3,
    title:
      "Introducing Sahara Legends: A New, Gamified Way to Interact with the Sahara Ecosystem",
    description:
      "Experience a revolutionary way to engage with AI development through our new gamified platform.",
    content:
      " Today, Sahara AI proudly launches the Early Access Program for Sahara AI Studio, marking the start of the second phase of our testnet. This program provides exclusive early access to an all-in-one platform designed to transform the AI development lifecycle—from data acquisition to model development and deployment—into a streamlined, integrated experience. AI development has traditionally been fragmented, requiring developers to manage multiple tools and platforms, leading to inefficiencies and high costs. Sahara AI Studio solves these challenges by integrating the entire AI lifecycle into one platform. From finding the right model or dataset to creating and deploying RAG and non-RAG pipelines, developers can now seamlessly build, experiment, and launch AI systems in one easy-to-use platform.The Early Access Program ensures that developers worldwide, whether focused on large-scale enterprise AI or specialized projects, benefit from a streamlined, developer-first experience. By participating, developers will contribute to optimizing the platform for practical, real-world applications, making AI development faster and more effective. Participants will earn rewards for their early feedback and contributions to the platform.",
    date: "JAN 29, 2025",
    image:
      "https://sjc.microlink.io/zcQy5U1IXMstOBPYmF1w3wlXWGAIcr8gbjlBQ9gazx9jnVrOMopZZdCj2BWQyVCMvmf1hKdRXSNDcVB4BDyPMw.jpeg",
  },
  {
    id: 4,
    title:
      "DeepSeek: How 10,000 GPUs and a Quant Trader Sparked an AI Revolution",
    description:
      "Discover the fascinating story behind DeepSeek's breakthrough in AI computing infrastructure.",
    content:
      " Today, Sahara AI proudly launches the Early Access Program for Sahara AI Studio, marking the start of the second phase of our testnet. This program provides exclusive early access to an all-in-one platform designed to transform the AI development lifecycle—from data acquisition to model development and deployment—into a streamlined, integrated experience. AI development has traditionally been fragmented, requiring developers to manage multiple tools and platforms, leading to inefficiencies and high costs. Sahara AI Studio solves these challenges by integrating the entire AI lifecycle into one platform. From finding the right model or dataset to creating and deploying RAG and non-RAG pipelines, developers can now seamlessly build, experiment, and launch AI systems in one easy-to-use platform.The Early Access Program ensures that developers worldwide, whether focused on large-scale enterprise AI or specialized projects, benefit from a streamlined, developer-first experience. By participating, developers will contribute to optimizing the platform for practical, real-world applications, making AI development faster and more effective. Participants will earn rewards for their early feedback and contributions to the platform.",

    date: "JAN 25, 2025",
    image:
      "https://sjc.microlink.io/zcQy5U1IXMstOBPYmF1w3wlXWGAIcr8gbjlBQ9gazx9jnVrOMopZZdCj2BWQyVCMvmf1hKdRXSNDcVB4BDyPMw.jpeg",
  },
];

export default function BlogDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state?.post || blogPosts[0];

  const relatedPosts = blogPosts.filter((item) => item.id !== post.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {/* Blog Content */}
        <div className="md:col-span-2 border rounded-lg p-2 md:p-4">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-contain rounded-lg"
          />
          <h1 className=" text-xl md:text-2xl font-semibold mt-6 text-[#333]">
            {post.title}
          </h1>
          <p className="text-gray-500 mt-2">{post.date}</p>
          <p
            align="justify"
            className="mt-4 text-[15px] md:text-base text-gray-600"
          >
            {post.content}
          </p>
        </div>

        {/* Related Blogs (Right Sidebar) */}
        <div>
          <FadeUp>
            <h3 className="text-xl font-semibold mb-2 md:mb-4 bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-blue-800">
              Related Blogs
            </h3>
          </FadeUp>

          {relatedPosts.slice(0, 3).map((item, index) => (
            <div
              key={item.id}
              className=" mb-2 md:mb-4 p-2 md:p-4 border rounded-lg shadow-sm hover:shadow-2xl transition cursor-pointer"
              onClick={() =>
                navigate(`/blog/${item.id}`, { state: { post: item } })
              }
            >
              <FadeRight delay={index * 0.1}>
                <h4 className="text-base md:text-lg font-medium text-[#333] leading-tight">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-500">{item.date}</p>
              </FadeRight>
            </div>
          ))}
        </div>
      </div>

      {/* Related Blogs (Bottom Section) */}
      <FadeDown>
        <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 mt-6 md:mt-12">
          More Blogs
        </h3>
      </FadeDown>

      <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-3 md:mt-6">
        {relatedPosts.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className=" p-2 md:p-4 border rounded-lg shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
            onClick={() =>
              navigate(`/blog/${item.id}`, { state: { post: item } })
            }
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h4 className="mt-4 text-base md:text-lg font-medium text-[#333] leading-tight">
              {item.title}
            </h4>
            <p className="text-sm text-gray-500">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
