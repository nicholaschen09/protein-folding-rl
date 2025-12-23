

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-semibold text-gray-900 mb-3 tracking-tight">My Blog</h1>
          <p className="text-lg text-gray-600 leading-relaxed">Thoughts, stories and ideas</p>
        </header>

        {/* Blog Posts */}
        <main className="space-y-10">
          
          {/* Post 1 */}
          <article>
            <h2 className="text-3xl font-medium text-gray-900 mb-3 tracking-tight leading-tight">
              The Future of Artificial Intelligence
            </h2>
            <p className="text-gray-500 mb-4 text-sm">March 15, 2024</p>
            

            
            <div className="space-y-6 text-gray-700 leading-7">
              <p>
                Artificial intelligence is rapidly transforming every aspect of our lives. From healthcare 
                to transportation, from entertainment to education, AI is reshaping how we work, learn, 
                and interact with the world around us.
              </p>
              <p>
                The recent breakthroughs in large language models and computer vision have opened up 
                possibilities that seemed like science fiction just a few years ago. We're now seeing 
                AI systems that can write code, create art, and even engage in complex reasoning tasks.
              </p>
              <p>
                However, with great power comes great responsibility. As we continue to develop more 
                sophisticated AI systems, we must also address the ethical implications and ensure 
                that these technologies benefit all of humanity.
              </p>
            </div>
          </article>

          {/* Post 2 */}
          <article>
            <h2 className="text-3xl font-medium text-gray-900 mb-3 tracking-tight leading-tight">
              Building Better Web Experiences
            </h2>
            <p className="text-gray-500 mb-4 text-sm">March 8, 2024</p>
            

            
            <div className="space-y-6 text-gray-700 leading-7">
              <p>
                In today's digital landscape, creating exceptional web experiences is more important 
                than ever. Users expect fast, responsive, and intuitive interfaces that work seamlessly 
                across all devices.
              </p>
              <p>
                Modern web development frameworks like Next.js, React, and Vue have made it easier 
                to build complex applications while maintaining good performance and user experience. 
                The key is understanding when and how to use these tools effectively.
              </p>
              <p>
                Performance optimization, accessibility, and progressive enhancement should be at the 
                core of every web project. By focusing on these fundamentals, we can create web 
                experiences that truly serve our users' needs.
              </p>
            </div>
          </article>

          {/* Post 3 */}
          <article>
            <h2 className="text-3xl font-medium text-gray-900 mb-3 tracking-tight leading-tight">
              The Art of Minimalism in Design
            </h2>
            <p className="text-gray-500 mb-4 text-sm">February 28, 2024</p>
            

            
            <div className="space-y-6 text-gray-700 leading-7">
              <p>
                Less is often more when it comes to design. Minimalism isn't just about removing 
                elements—it's about focusing on what truly matters and creating clarity through 
                thoughtful simplicity.
              </p>
              <p>
                Good minimalist design requires careful attention to typography, spacing, and color. 
                Every element should have a purpose, and there should be plenty of breathing room 
                to let the content shine.
              </p>
              <p>
                The challenge with minimalism is knowing what to remove and what to keep. It's an 
                iterative process of refinement that ultimately leads to more impactful and 
                memorable designs.
              </p>
            </div>
          </article>

        </main>


      </div>
    </div>
  );
}
