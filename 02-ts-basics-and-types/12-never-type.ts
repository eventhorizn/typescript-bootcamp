// this function actually returns 'never'
// it will never return anything, because of throw
// inferred type is void, but manual assigning is good for clean code
function generateError(message: string, code: number): never {
	throw { message: message, errorCode: code };
}

generateError('An error occured!', 500);
