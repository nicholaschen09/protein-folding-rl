

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] font-['Inter',system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]" style={{minHeight: '100vh'}}>
      <div className="max-w-xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#f8f9fc] mb-3 tracking-tight">Protein Folding RL</h1>
          <p className="text-base text-[#b2bbc5] leading-relaxed font-medium">Advances in reinforcement learning for protein structure prediction</p>
        </header>

        {/* Blog Posts */}
        <main className="space-y-10">
          
          {/* Post 1 */}
          <article>
            <h2 className="text-2xl font-bold text-[#f8f9fc] mb-3 tracking-tight leading-tight">
              AlphaFold and the Protein Folding Revolution
            </h2>
            <p className="text-[#b2bbc5] mb-4 text-sm font-semibold">March 15, 2024</p>



            <div className="space-y-4 text-[#f8f9fc] text-sm leading-6">
              <p>
                DeepMind's AlphaFold breakthrough in 2020 revolutionized protein structure prediction, achieving accuracy levels comparable to experimental methods. This success demonstrated the power of deep learning in solving one of biology's most challenging problems.
              </p>
              <p>
                The protein folding problem involves predicting how amino acid sequences fold into three-dimensional structures. With over 200 million known proteins and countless more possible sequences, computational approaches are essential for understanding biological function.
              </p>
              <p>
                AlphaFold's success opened new avenues for drug discovery, enzyme design, and understanding disease mechanisms. However, challenges remain in predicting protein dynamics, interactions, and folding pathways.
              </p>
            </div>
          </article>

          {/* Post 2 */}
          <article>
            <h2 className="text-2xl font-bold text-[#f8f9fc] mb-3 tracking-tight leading-tight">
              Reinforcement Learning Approaches to Protein Folding
            </h2>
            <p className="text-[#b2bbc5] mb-4 text-sm font-semibold">March 8, 2024</p>



            <div className="space-y-4 text-[#f8f9fc] text-sm leading-6">
              <p>
                While AlphaFold excels at single-structure prediction, reinforcement learning offers promising approaches for tackling dynamic aspects of protein folding. RL agents can learn folding strategies through interaction with molecular environments.
              </p>
              <p>
                Current RL approaches focus on:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fragment-based assembly using Markov Decision Processes</li>
                <li>Energy landscape exploration with policy gradients</li>
                <li>Multi-agent coordination for complex protein complexes</li>
                <li>Temporal abstraction for long folding trajectories</li>
              </ul>
              <p>
                The combination of RL with physics-based simulations and neural network potentials creates powerful hybrid approaches for protein structure prediction and design.
              </p>
            </div>
          </article>

          {/* Post 3 */}
          <article>
            <h2 className="text-2xl font-bold text-[#f8f9fc] mb-3 tracking-tight leading-tight">
              Current Challenges in Protein Folding RL
            </h2>
            <p className="text-[#b2bbc5] mb-4 text-sm font-semibold">February 28, 2024</p>



            <div className="space-y-4 text-[#f8f9fc] text-sm leading-6">
              <p>
                Despite recent advances, several challenges remain in applying RL to protein folding:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>High-dimensional state and action spaces</li>
                <li>Sparse rewards in folding environments</li>
                <li>Computational cost of molecular dynamics simulations</li>
                <li>Generalization across protein families</li>
              </ul>
              <p>
                Ongoing research focuses on developing more efficient exploration strategies, better reward functions, and scalable architectures that can handle the complexity of biological systems.
              </p>
              <p>
                The integration of RL with traditional computational methods like molecular dynamics and quantum chemistry shows particular promise for advancing our understanding of protein behavior.
              </p>
            </div>
          </article>

        </main>


       </div>
     </div>
   );
}
