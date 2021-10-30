export default interface IReducerState<R = any, E = null | string> {
  fetching: boolean;
  error: E;
  result: R;
}
