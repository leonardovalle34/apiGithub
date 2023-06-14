export type instanceData = { header: string; length: number };
export type dataInstance = { header: string; data: Array<instanceData> };

export function simulateFetchApi() {
  return new Promise((resolve: (result: Array<dataInstance>) => void) => {
    setTimeout(() => {
      const result: Array<dataInstance> = [
        {
          header: new Date().toISOString(),
          data: [
            { header: "billy", length: 1 },
            { header: "perla", length: 10 },
            { header: "will", length: 15 },
          ],
        },
        {
          header: new Date().toISOString(),
          data: [
            { header: "billy", length: 9 },
            { header: "perla", length: 19 },
            { header: "will", length: 29 },
          ],
        },
      ];
      resolve(result);
    }, 5000);
  });
}
