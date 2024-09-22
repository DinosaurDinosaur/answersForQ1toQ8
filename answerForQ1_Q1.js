
/**
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', profession: ‘xxx’}
lastName, note can be empty, customerID can only be a set of digital numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’, ‘engineer’ or ‘systemAnalytics’.

Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this array and print it out.
**/

function sortUserName(users) {
    // Sort the array based on the combined string of firstName, lastName, and customerID
    users.sort((a, b) => {
      const aCombined = a.firstName + a.lastName + a.customerID;
      const bCombined = b.firstName + b.lastName + b.customerID;
      return aCombined.localeCompare(bCombined);
    });
  
    // Print the sorted array
    console.log(users);
  }

  function sortByType(users) {
    // Define a map to assign priorities to professions
    const professionPriorities = {
      "systemAnalytics": 5,
      "engineer": 4,
      "productOwner": 3,
      "freelancer": 2,
      "student": 1
    };
  
    // Sort the array based on the profession priority
    users.sort((a, b) => {
      const aPriority = professionPriorities[a.profession] || 0;
      const bPriority = professionPriorities[b.profession] || 0;
      return bPriority - aPriority; // Descending order
    });
  
    // Print the sorted array
    console.log(users);
  }


