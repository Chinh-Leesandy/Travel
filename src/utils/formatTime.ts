export const formatTime = (time: string) => {
  const regex = /PT(\d+H)?(\d+M)?/;
  const matches = time.match(regex);
  if (!matches) {
    throw new Error('Invalid time format');
  }
  const hours = matches[1] ? parseInt(matches[1].replace('H', '')) : 0;
  const minutes = matches[2] ? parseInt(matches[2].replace('M', '')) : 0;

  return `${hours} giờ ${minutes} phút`;
}

export const formatDateTime = (time: string) => {
  const date = new Date(time);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
  const year = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}