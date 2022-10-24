export const getCostValues = (cost) => {
  let costValues = [];
  if (!cost) {
    costValues.push("No cost");
    return costValues;
  } else {
    cost.Wood && costValues.push(`Wood: ${cost.Wood}`);
    cost.Food && costValues.push(`Food: ${cost.Food}`);
    cost.Gold && costValues.push(`Gold: ${cost.Gold}`);
  }
  return costValues.join(", ");
};
