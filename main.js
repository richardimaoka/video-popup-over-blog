// Citation data
const citations = {
  1: {
    title: "Deep Learning: A Critical Review of Neural Network Architectures",
    authors: "J. Chen, M. Richards, S. Patel",
    abstract:
      "This comprehensive review examines the evolution of neural network architectures from 2012-2020, with particular focus on convolutional networks, recurrent networks, and the transition to transformer-based models. The paper highlights key innovations that enabled the deep learning revolution and identifies persistent challenges in the field.",
    link: "#citation-1",
  },
  2: {
    title: "Attention Is All You Need",
    authors:
      "Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, Illia Polosukhin",
    abstract:
      "This groundbreaking paper introduced the Transformer architecture which relies entirely on attention mechanisms and dispensed with recurrence and convolutions entirely. The approach demonstrated superior performance on machine translation tasks while being more parallelizable and requiring significantly less time to train.",
    link: "#citation-2",
  },
  3: {
    title: "Language Models are Few-Shot Learners",
    authors: "Tom B. Brown, Benjamin Mann, Nick Ryder, Melanie Subbiah, et al.",
    abstract:
      "This paper introduced GPT-3, a 175 billion parameter autoregressive language model that demonstrated remarkable few-shot learning capabilities. The authors showed that by scaling up model size significantly, language models could perform tasks they were not explicitly trained on, simply by providing a few examples or instructions in the input prompt.",
    link: "#citation-3",
  },
  4: {
    title: "High-Resolution Image Synthesis with Latent Diffusion Models",
    authors:
      "Robin Rombach, Andreas Blattmann, Dominik Lorenz, Patrick Esser, Björn Ommer",
    abstract:
      "This paper presents Stable Diffusion, a latent diffusion model capable of generating high-quality images based on text prompts. By operating in a compressed latent space, the approach dramatically reduced computational requirements while maintaining high image fidelity, democratizing access to AI image generation technology.",
    link: "#citation-4",
  },
  5: {
    title:
      "Multimodal Foundation Models: From Specialists to General-Purpose Assistants",
    authors: "A. Johnson, L. Zhang, R. Patel, M. Rodriguez",
    abstract:
      "This survey examines the architectural principles behind modern multimodal AI systems capable of processing and generating content across text, images, audio, and video. The authors analyze the challenges and breakthroughs in developing unified representations across modalities and discuss the emergent capabilities of these general-purpose systems.",
    link: "#citation-5",
  },
  6: {
    title:
      "Training Language Models to Follow Instructions with Human Feedback",
    authors: "Long Ouyang, Jeff Wu, Xu Jiang, Diogo Almeida, et al.",
    abstract:
      "This paper describes InstructGPT, a language model fine-tuned with human feedback to better align with user intent. The authors demonstrate that Reinforcement Learning from Human Feedback (RLHF) can effectively improve model helpfulness, harmlessness, and honesty compared to larger models trained only with unsupervised learning.",
    link: "#citation-6",
  },
  7: {
    title: "Scaling Vision Transformers to 22 Billion Parameters",
    authors: "Xi Chen, Xiao Wang, Soravit Changpinyo, AJ Piergiovanni, et al.",
    abstract:
      "This paper introduces a 22B parameter vision transformer (ViT) built using a sparse mixture of experts architecture. The authors demonstrate state-of-the-art performance across a wide range of computer vision tasks while requiring significantly less computational resources during inference than dense models of comparable size.",
    link: "#citation-7",
  },
};

// Add click event listeners to citation buttons
document.querySelectorAll(".citation-button").forEach((button) => {
  button.addEventListener("click", function () {
    const refId = this.getAttribute("data-ref");
    const citation = citations[refId];

    // Populate popup with citation data
    document.getElementById("popup-title").textContent = citation.title;
    document.getElementById("popup-authors").textContent = citation.authors;
    document.getElementById("popup-abstract").textContent = citation.abstract;
    document.getElementById("popup-link").setAttribute("href", citation.link);

    // Show popup with animation
    const overlay = document.getElementById("popup-overlay");
    const popup = document.getElementById("popup-container");

    overlay.style.display = "flex";

    // Trigger reflow to start animations
    void overlay.offsetWidth;

    overlay.classList.add("active");
    popup.classList.add("active");
  });
});

// Close popup when clicking close button or outside the popup
document.getElementById("popup-close").addEventListener("click", function () {
  closePopup();
});

document
  .getElementById("popup-overlay")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      closePopup();
    }
  });

function closePopup() {
  const overlay = document.getElementById("popup-overlay");
  const popup = document.getElementById("popup-container");

  overlay.classList.remove("active");
  popup.classList.remove("active");

  // Remove the display property after animation completes
  setTimeout(() => {
    overlay.style.display = "none";
  }, 300);
}
