import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { ValidateProfileError } from '../../types/profile'



describe('getProfileValidateErrors.test', () => {
	test('should return readonly equal to true', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				validateErrors: [
					ValidateProfileError.INCORRECT_AGE,
					ValidateProfileError.INCORRECT_USER_DATA
				]
			}
		}
		expect(getProfileValidateErrors(state as StateSchema)).toEqual([
			ValidateProfileError.INCORRECT_AGE,
			ValidateProfileError.INCORRECT_USER_DATA
		])
	})
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
	})
})
