import HeaderImg from './assets/tree.jpg';
import  Button from './components/button/button.jsx'
const App = () => { 

  return (
    <div class="m10proc">
      <h1 class="whiteBg marginT20">SITE<span class="blueText">LOGO</span></h1>
      <nav id="navbar">
        <a href="">Home</a>
        <a href="">Product</a>
        <a href="">Company</a>
        <a href="">Contact</a>
      </nav>
      <img src={HeaderImg} alt="image of tree"/>  
      
      <section id='midPage'>
        <div>
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nam iste qui nobis? Deleniti neque accusamus, nam impedit laborum minima expedita? Veniam aspernatur repudiandae quo tempora debitis autem, recusandae nostrum obcaecati blanditiis suscipit dolores iusto sint rerum hic quam inventore fuga dicta similique quas accusantium officiis dolor natus deserunt.</p>
        </div>

        <div>
          <h1>Company</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nam iste qui nobis? Deleniti neque accusamus, nam impedit laborum minima expedita? Veniam aspernatur repudiandae quo tempora debitis autem, recusandae nostrum obcaecati blanditiis suscipit dolores iusto sint rerum hic quam inventore fuga dicta similique quas accusantium officiis dolor natus deserunt.</p>
        </div>

        <div>
          <h1>Services</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nam iste qui nobis? Deleniti neque accusamus, nam impedit laborum minima expedita? Veniam aspernatur repudiandae quo tempora debitis autem, recusandae nostrum obcaecati blanditiis suscipit dolores iusto sint rerum hic quam inventore fuga dicta similique quas accusantium officiis dolor natus deserunt.</p>
        </div>
      </section>

      <section id='endPage'>
        <div>
          <div>
            <h1>Content</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quos accusamus dolore corporis pariatur. Numquam non adipisci, id natus corporis labore provident odio. Id nemo quos omnis suscipit autem iusto?</p>
          </div>
          <div>
            <h2>Sub Header</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita porro a ex quia suscipit accusamus, esse ut soluta atque dolor eum modi obcaecati vel mollitia facere officia dolores voluptatum veritatis earum laborum! Animi, numquam atque? Labore quisquam nobis ab cumque.</p>
          </div>
        </div>
        <div class="btmNav">
          <h1>Navigation</h1>
          <div class="bottomNav">
            <a href="">Home</a>
            <a href="">Product</a>
            <a href="">Company</a>
            <a href="">Contact</a>
          </div>
        </div>
      </section>
      <Button />
    </div>
  );
};

export default App;