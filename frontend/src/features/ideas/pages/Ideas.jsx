import { useState } from "react";
import { ThumbsUp, MessageCircle } from "lucide-react";

import initialIdeas from "E:/gramlink/frontend/src/data/ideaData.json";

const Ideas = () => {
  const [ideas, setIdeas] = useState(initialIdeas);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addIdea = () => {
    if (!name || !title || !description) return;

    setIdeas([
      {
        id: Date.now(),
        title,
        description,
        author: `${name} (Farmer)`,
        likes: 0,
      },
      ...ideas,
    ]);

    setName("");
    setTitle("");
    setDescription("");
  };

  const likeIdea = (id) => {
    setIdeas(
      ideas.map((idea) =>
        idea.id === id ? { ...idea, likes: idea.likes + 1 } : idea
      )
    );
  };

  return (
    <section className="min-h-screen bg-amber-50 px-4 py-10">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#1f4d3a]">
            Community Ideas 💡
          </h1>
          <p className="mt-3 text-gray-600">
            Share your ideas and help your village grow
          </p>
        </div>

        {/* Add Idea Box */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-10">
          <h2 className="text-xl font-semibold text-[#1f4d3a] mb-4">
            Share an Idea
          </h2>

          {/* Farmer Name */}
          <input
            type="text"
            placeholder="Your Name (Farmer)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-3 p-3 border rounded-md"
          />

          {/* Idea Title */}
          <input
            type="text"
            placeholder="Idea title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-3 p-3 border rounded-md"
          />

          {/* Idea Description */}
          <textarea
            placeholder="Describe your idea..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mb-4 p-3 border rounded-md"
            rows={4}
          />

          <button
            onClick={addIdea}
            className="bg-[#214e3b] text-white px-6 py-2 rounded-md hover:bg-[#023322]"
          >
            Post Idea
          </button>
        </div>

        {/* Ideas List */}
        <div className="space-y-6">
          {ideas.map((idea) => (
            <div
              key={idea.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#1f4d3a]">
                {idea.title}
              </h3>

              <p className="mt-2 text-gray-600">
                {idea.description}
              </p>

              <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                <span>— {idea.author}</span>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => likeIdea(idea.id)}
                    className="flex items-center gap-1 hover:text-green-700"
                  >
                    <ThumbsUp size={18} /> {idea.likes}
                  </button>

                  <button className="flex items-center gap-1 hover:text-green-700">
                    <MessageCircle size={18} /> Comment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Ideas;
