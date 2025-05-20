export const printObject = (argument: any) => {
  console.info('argument: ', argument);
}

export function genericFunction<T>( argument: T ): T {
  return argument;
}

export const genericFunctionArrow = <T>( argument: T ) => argument;