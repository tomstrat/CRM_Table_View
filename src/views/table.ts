import { InternalDataFormat, InternalRecord } from "../models/internal.interfaces"
import layout from "./layout"
import * as R from "ramda"

interface TableDataConfig {
	excludes: string[]
	type: "header" | "row"
}

function formatHeader(header: string): string {
	return header.replace(/([a-z])([A-Z])/, (match, p1, p2) => {
		return [p1, " ", p2].join("")
	}).split(" ").map(word => word[0].toUpperCase() + word.substring(1)).join(" ")
}

function getTableData(record: InternalRecord, config: TableDataConfig): string {
	const { excludes, type } = config
	const keys = Object.keys(record) as Array<keyof typeof record>
	return keys.map(key => {
		if (R.not(R.includes(key, excludes))) {
			return type === "header" ? `<td>${formatHeader(key)}</td>` : `<td>${record[key]}</td>`
		}
	}).join("")
}

export function tableViewBuilder(sfdata: InternalDataFormat) {
	const { records } = sfdata
	const excludes = ["meta"]

	const renderedHeaders = getTableData(records[0], { excludes, type: "header" })
	const renderedData = records.map(record => {
		return `
				<tr>
					${getTableData(record, { excludes, type: "row" })}
				</tr>
		`
	}).join("")

	const page = `
		<table>
			<thead>
				<tr>
					${renderedHeaders}
				</tr>
			</thead>
			<tbody>
				${renderedData}
			</tbody>
		</table>    
	`

	return layout(page)
}

