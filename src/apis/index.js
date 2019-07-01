const fetchCatData = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      reject(new Error('Failed to fetch cat!'));
    } else {
      // eslint-disable-next-line global-require
      resolve({ name: 'Meow!', imgSrc: require('@/assets/cat1.jpeg') });
    }
  }, 1000);
});

const fetchUserData = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      reject(new Error('Failed to fetch user!'));
    } else {
      resolve({
        firstName: 'Adam',
        lastName: 'Anderson',
        role: 'Admin',
        // eslint-disable-next-line global-require
        imgSrc: require('@/assets/userprofile.png'),
      });
    }
  }, 1000);
});

export { fetchCatData, fetchUserData };
