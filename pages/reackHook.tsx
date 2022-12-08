import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Checkbox } from '@mui/material';


// type MyFormData = {
// 	firstName: string;
// 	lastName: string;
// 	category: string;
// }

// export default function App() {
// 	const {register, handleSubmit, formState: {errors}} = useForm<MyFormData>();
// 	const onSubmit: SubmitHandler<MyFormData> = (data) => {
// 		console.log(data)
// 	}

// 	return (
// 		<form onSubmit={handleSubmit(onSubmit)}>
// 			<input {...register('firstName', {required: true})} placeholder="名前" />
// 			{errors.firstName && <div>名前を入力してください</div>}
// 			<input {...register('lastName', {required: true})} placeholder="名字" />
// 			{errors.lastName && <div>名字を入力してください</div>}
// 			<select {...register('category', {required: true})}>
// 				<option value="">選択...</option>
// 				<option value="A">カテゴリA</option>
// 				<option value="B">カテゴリB</option>
// 			</select>
// 			{errors.category && <div>カテゴリを選択してください</div>}
// 			<input type="submit" />
// 		</form>
// 	)
// }

type MyFormData = {
	isChecked: boolean;
}

export default function App() {
	const {handleSubmit, control, formState: {errors}} = useForm<MyFormData>();
	const onSubmit: SubmitHandler<MyFormData> = (data) => {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Controller name="isChecked" control={control} defaultValue={false} rules={{required: true}} render={({field: {onChange, value}})=> <Checkbox onChange={onChange} value={value} />}></Controller>
			{errors.isChecked && <label>チェックしてください</label>}
			<input type="submit" />
		</form>
	)
}