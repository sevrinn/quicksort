    //Quicksort with Hoare's partitioning scheme
    const quicksort = (arr, i = 0, j = arr.length - 1) => { //takes array, i pointer at 0, j pointer at end of array
      if (i >= j) return;                                   //if i pointer is gt or equal to j pointer, return;
      const pivot = arr[Math.floor((i + j)/2)];             //set pivot to be halfway point inbetween i and j              
      const index = partition(arr, i, j, pivot);            //run partition helper function, set index to the resulting 
      quicksort(arr, i, index - 1);                         //recursively call quicksort, passing in the array, current i and current j
      quicksort(arr, index, j);                             //recursively call 
      return arr;
    }
    
    //helper partition
        //reorder array so elements smaller than pivot go on left and elements larger
        //than pivot go on the right of the pivot
        //this is the PARTITION operation
    const partition = (arr, i, j, pivot) => {
      while( i <= j) {
        while(arr[i] < pivot && i <= j) {
          i++;
        }
        while(arr[j] > pivot){
          j--;
        }
        if (i <= j) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          i++;
          j--;
        }
      }
      return i;
    }
    
    
    let array = [1, 3, 7, 4, 5, 2, 6];
    console.log(array);
    console.log(quicksort(array));