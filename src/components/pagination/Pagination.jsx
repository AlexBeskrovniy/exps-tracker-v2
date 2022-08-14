import { useRecordsContext } from "../../providers/RecordsProvider";

const { records } = useRecordsContext();

const recordsCount = records.length;

const RECORDS_PER_PAGE = 20;

const pagesCount = Math.ceil(RECORDS_PER_PAGE / recordsCount);

