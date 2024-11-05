import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import BlogList from './components/BlogList';
import BlogPostPage from './components/BlogPostPage';
import './css/style.css';

const App = () => {
  const headerData = {
    title: "BETTY BLOGS",
    subtitle: "Hi gang! Welcome to my bloggggg. Don't forget to get my newest merch!"
  };

  const blogPosts = [
    { id: 1, title: "Fake detective on the loose", description: "HEELO PLS WORK SDAYHuasUYdsayudgyusagdysagduy", content: "Detailed content for post 1..." },
    { id: 2, title: "Another blog post title", description: "This is a second blog post description", content: "Detailed content for post 2..." },
    { id: 3, title: "Third post title", description: "Yet another blog post description", content: "Detailed content for post 3..." },
    { id: 4, title: "Another blog post title", description: "This is a second blog post description", content: "Detailed content for post 2..." },
    { id: 5, title: "Third post title", description: "Yet another blog post description", content: "Detailed content for post 3..." },
    { id: 6, title: "Third post title", description: "Yet another blog post description", content: "Detailed content for post 3..." }
  ];

  return (
    <Router>
      <Header title={headerData.title} subtitle={headerData.subtitle} />
      <Routes> 
        <Route path="/" element={<BlogList posts={blogPosts} />} />
        <Route path="/blog/:id" element={<BlogPostPage posts={blogPosts} />} />
      </Routes>
    </Router>
  );
};

export default App;
