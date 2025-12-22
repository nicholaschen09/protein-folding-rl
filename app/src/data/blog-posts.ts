import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Protein Folding',
    content: `Protein folding is one of the most fascinating processes in molecular biology. In this post, we'll explore the fundamentals of how proteins fold into their native structures and why this process is so crucial for biological function.

The protein folding problem has been called one of the grand challenges of computational biology. Despite decades of research, we're still working to fully understand how a linear sequence of amino acids can spontaneously fold into a complex three-dimensional structure.

Recent advances in machine learning, particularly with models like AlphaFold, have revolutionized our ability to predict protein structures. These developments are opening new avenues for drug discovery and our understanding of biological processes.`,
    excerpt: 'An introduction to the fascinating world of protein folding and its importance in molecular biology.',
    date: '2024-01-15',
    author: 'Dr. Sarah Chen',
    tags: ['protein-folding', 'biology', 'molecular-science']
  },
  {
    id: '2',
    title: 'Reinforcement Learning in Computational Biology',
    content: `Reinforcement learning (RL) has emerged as a powerful tool in computational biology, offering new approaches to complex biological problems. Unlike supervised learning, RL allows agents to learn through interaction with their environment, making it particularly suitable for optimization problems in biology.

In the context of protein folding, RL can be used to optimize folding pathways, predict stable conformations, and even design new proteins with desired properties. The ability of RL agents to explore vast conformational spaces makes them ideal for tackling the exponential complexity of protein folding.

Recent research has shown promising results in using RL for drug discovery, where agents can learn to optimize molecular properties and identify promising drug candidates. This represents a significant shift from traditional computational approaches.`,
    excerpt: 'Exploring how reinforcement learning is revolutionizing computational biology and drug discovery.',
    date: '2024-01-20',
    author: 'Prof. Michael Rodriguez',
    tags: ['reinforcement-learning', 'computational-biology', 'ai']
  },
  {
    id: '3',
    title: 'The Future of AI in Drug Discovery',
    content: `Artificial intelligence is transforming every aspect of drug discovery, from target identification to clinical trial optimization. Machine learning models can now predict drug-target interactions, optimize molecular properties, and even identify potential side effects before expensive laboratory testing.

The integration of AI with traditional pharmaceutical research is creating unprecedented opportunities for accelerating drug development. Companies are reporting significant reductions in discovery timelines and costs, while improving the success rates of drug candidates.

Looking ahead, we can expect to see even more sophisticated AI systems that can design drugs from scratch, predict patient responses, and optimize treatment protocols. The convergence of AI, computational biology, and experimental validation promises to revolutionize medicine.`,
    excerpt: 'A look at how artificial intelligence is accelerating drug discovery and development processes.',
    date: '2024-01-25',
    author: 'Dr. Emily Watson',
    tags: ['ai', 'drug-discovery', 'machine-learning', 'pharmaceutical']
  }
];