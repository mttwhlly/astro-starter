<script>
    // Props with default values
    export let title = 'Svelte!';
    
    // Reactive state
    let count = 0;
    
    // Methods
    function incrementCount() {
      count += 1;
    }
  </script>
  
  <button class="bg-amber-600 text-black shadow-xs hover:bg-amber-600/90 h-9 px-4 rounded-md">{title}</button>