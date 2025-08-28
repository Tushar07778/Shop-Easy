<script>
 {
    button.addEventListener('click', () => {
      count++;
      cartCount.textContent = count;
      localStorage.setItem('cartCount', count);
    
      button.textContent = 'Added!';
      button.disabled = true;
      setTimeout(() => {
        button.textContent = 'Add to Cart';
        button.disabled = false;
      }, 1200);
    })
}
</script>
