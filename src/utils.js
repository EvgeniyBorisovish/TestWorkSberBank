export const initialArray = [
    { id: 1, name: "item one", tags: ["music", "sport", "science"] },
    { id: 2, name: "item two", tags: ["music"] },
    { id: 3, name: "item three", tags: ["fun"] },
    { id: 4, name: "item four", tags: ["sport", "science"] },
    { id: 5, name: "item five", tags: [] },
    { id: 6, name: "item four", tags: ["sport"] }
  ];
  
  
  export const correctResult = {
    fun: [
      {
        id: 3,
        name: "item three",
        tags: ["fun"]
      }
    ],
    music: [
      {
        id: 1,
        name: "item one",
        tags: ["music", "sport", "science"]
      },
      {
        id: 2,
        name: "item two",
        tags: ["music"]
      }
    ],
    science: [
      {
        id: 1,
        name: "item one",
        tags: ["music", "sport", "science"]
      },
      {
        id: 4,
        name: "item four",
        tags: ["sport", "science"]
      }
    ],
    sport: [
      {
        id: 1,
        name: "item one",
        tags: ["music", "sport", "science"]
      },
      {
        id: 4,
        name: "item four",
        tags: ["sport", "science"]
      },
      {
        id: 6,
        name: "item four",
        tags: ["sport"]
      }
    ]
  };
  
  export function getCorrectingObject(initialArray) {
    let resultObj = {};
  
    function f(elementObj, resultObj) {
      elementObj.tags.forEach((elementTags) => {
        if (resultObj[elementTags] === undefined) {
          resultObj[elementTags] = [];
        }
        resultObj[elementTags].push(elementObj);
      });
    }
  
    initialArray.forEach((element) => {
      f(element, resultObj);
    });
  
    return Object.keys(resultObj)
      .sort()
      .reduce((acc, id_prop) => {
        acc[id_prop] = resultObj[id_prop];
        return acc;
      }, {});
  }
  export function printObject(obj) {
    return JSON.stringify(obj, null, "\t");
  }
  