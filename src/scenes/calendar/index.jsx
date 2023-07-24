import {useState} from "react";
import {formatDate} from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import FullCalendar from "@fullcalendar/react";
import Header from "../../component/Header";
import {
	Box,
	Typography,
	useTheme,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";
import {tokens} from "../../theme";

const Calendar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [currentEvent, setCurrentEvent] = useState([]); //array of events

	const handleDateClick = (selected) => {
		const title = prompt("please enter a new title for you event");
		const calendarApi = selected.view.calendar;
		calendarApi.unselect();

		if (title) {
			calendarApi.addEvent({
				id: `${selected.dateStr}-${title}`,
				title,
				start: selected.startStr,
				end: selected.endStr,
				allDay: selected.allDay,
			});
		}
	};

	const handleEventClick = (selected) => {
		if (
			window.confirm(
				`Are you sure you want to delete the event '${selected.event.title}'`
			)
		) {
			selected.event.remove();
		}
	};
	return (
		<Box m="20px">
			<Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />

			<Box display="flex" justifyContent="space-between">
				{/* CALENDAR SIDEBAR */}
				<Box
					flex="1 1 20%"
					backgroundColor={colors.primary[400]}
					p="15px"
					borderRadius="4px"
				>
					<Typography varient="h5">Events</Typography>
					<List>
						{currentEvent.map((event) => (
							<ListItem
								key={event.id}
								sx={{
									backgroundColor: colors.greenAccent[500],
									margin: "10px 0",
									borderRadius: "2px",
								}}
							>
								<ListItemText
									primary={event.title}
									secondary={
										<Typography>
											{formatDate(event.start, {
												year: "numeric",
												month: "short",
												day: "numeric",
											})}
										</Typography>
									}
								/>
							</ListItem>
						))}
					</List>
				</Box>
				{/* CALENDAR */}
				<Box flex="1 1 100%" ml="15px">
					<FullCalendar
						height="75vh"
						plugins={[
							dayGridPlugin,
							timeGridPlugin,
							interactionPlugin,
							listPlugin,
						]}
						headerToolbar={{
							left: "prev,next today",
							center: "title",
							right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
						}}
						initialView="dayGridMonth"
						editable={true}
						selectable={true}
						selectMirror={true}
						dayMaxEvents={true}
						select={handleDateClick}
						eventClick={handleEventClick}
						eventsSet={(events) => setCurrentEvent(events)}
						initialEvents={[
							{
								id: "12315",
								title: "All-day event",
								date: "2023-07-24",
							},
							{
								id: "5123",
								title: "Timed event",
								date: "2023-07-28",
							},
						]}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default Calendar;
