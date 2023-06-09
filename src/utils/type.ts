export type MonthType = {
	1: string
	2: string
	3: string
	4: string
	5: string
	6: string
	7: string
	8: string
	9: string
	10: string
	11: string
	12: string
}
export type DaysGridProps = {
	day: number
	month: number
	year: number
	getDay: (day: number) => void
}

export type DatePickerProps = {
	yearRange: {
		start: number
		end: number
	}
	returnDate: (date: string) => void
	placeholder: string
}

export type SelectYearProps = {
	yearRange: {
		start: number
		end: number
	}
	current: number
	handleYearChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export type SelectMonthProps = {
	current: number
	handleMonthChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}
