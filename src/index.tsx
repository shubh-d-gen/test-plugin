import TestPlugin from './NativeTestPlugin';

export function multiply(a: number, b: number): number {
  return TestPlugin.multiply(a, b);
}
