const groupDataByDate = (data) => {
    const groupedData = [];
    data.forEach(({ timestamp, ...rest }) => {
      const date = new Date(timestamp).toLocaleDateString();
      if (!groupedData[date]) {
        groupedData[date] = [{ ...rest }];
      } else {
        groupedData[date].push({ ...rest });
      }
    });
    return groupedData;
  };

export default groupDataByDate