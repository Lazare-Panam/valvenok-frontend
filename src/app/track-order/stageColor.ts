export const stageColor = (stage: string) => {
  switch (stage.toLowerCase()) {
    case 'fully paid':        return { bgcolor: 'success.light', color: 'success.dark' };
    case 'part paid':         return { bgcolor: 'warning.light', color: 'warning.dark' };
    case 'shipped on credit': return { bgcolor: 'info.light', color: 'info.dark' };
    case 'order received':    return { bgcolor: 'primary.light', color: 'primary.dark' };
    case 'purchase order':    return { bgcolor: 'grey.200', color: 'text.primary' };
    case 'invoice':           return { bgcolor: 'grey.300', color: 'text.primary' };
    default:                  return { bgcolor: 'grey.100', color: 'text.secondary' };
  }
};