


export const getRandomCards = (count, data) => {
    if (!data || data.length === 0) {
      return [];
    }
    
    const filteredData = data.filter((card) => card.id !== '53' && card.id !== '55')
    const shuffledData = shuffle(filteredData)

    return shuffledData.slice(0, count)
  };
  
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }