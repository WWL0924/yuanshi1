export const aggregateProjectHours = (workOrders) => {
  const projectHoursMap = workOrders.reduce((result, currentItem) => {
    const nextHours = (result[currentItem.project] || 0) + currentItem.hours;
    result[currentItem.project] = Number(nextHours.toFixed(1));
    return result;
  }, {});

  return Object.entries(projectHoursMap).map(([project, hours]) => ({
    project,
    hours,
  }));
};
