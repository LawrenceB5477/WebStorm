export const sumArray = (...args: number[]) =>
    args.reduce((accum: number, current: number): number => accum + current, 0);

console.log(sumArray(...[1, 2, 3, 4, 5]));
//test

export const filterByTerm = (objects: any[], keyword: string): any[] => {
    return objects.filter((object) => {
        if ("url" in object) {
            const url = object.url as string;
            if (url.indexOf(keyword) != -1) {
                return true;
            }
        }
        return false;
    });
};

