export interface HasFormatter {
	// Wherever this is used, should have a method that returns a string.
	format(param: number): string;
}
