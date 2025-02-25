import React from "react";
import { motion } from "framer-motion";
import BreadCrumb from "../components/BreadCrumb";

import { ArrowRight, Calendar } from "lucide-react";

import Banner from "../Assets/Images/banner-5.avif";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title:
      "Early Access to Sahara AI Studio Now Open: An Integrated Platform Redefining AI Development",
    description:
      "Join the Early Access Program for Sahara AI Studio. This program provides exclusive early access to an all-in-one platform designed to transform the AI development lifecycle into a streamlined, integrated experience.",
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
    date: "JAN 25, 2025",
    image:
      "https://sjc.microlink.io/zcQy5U1IXMstOBPYmF1w3wlXWGAIcr8gbjlBQ9gazx9jnVrOMopZZdCj2BWQyVCMvmf1hKdRXSNDcVB4BDyPMw.jpeg",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <BreadCrumb
        title="Latest News & Updates"
        currentPage="Blog"
        backgroundImage={Banner}
      />

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 lg:py-14">
        {/* Featured Post */}
        {blogPosts
          .filter((post) => post.featured)
          .map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-full">
                    <div className="absolute top-4 left-4 z-10">FEATURED</div>
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-500 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{post.date}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
                    <p className="text-gray-600 mb-6">{post.description}</p>
                    <button className="group bg-gray-800 hover:bg-gray-900 text-white flex justify-center items-center py-2 px-4 rounded text-sm">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts
            .filter((post) => !post.featured)
            .map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="flex items-center gap-2 text-gray-500 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{post.date}</span>
                    </div>
                    <h3 className="text-2xl font-semibold leading-none tracking-tight line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.description}
                    </p>
                  </div>

                  <div className=" p-6 pt-0">
                    <button className="group text-gray-800 hover:text-gray-900 font-normal flex justify-center items-center py-2 px-4 rounded text-sm">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-blue-100 mb-8">
              Get the latest insights and updates delivered directly to your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
