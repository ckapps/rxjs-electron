export interface Adapter<T, U = unknown> {
  adapt(u: U): T;
}
