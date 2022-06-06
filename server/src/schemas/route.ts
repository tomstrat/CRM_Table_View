import { Router } from "express"
import { Role } from "../database/models/User"

export type RouteDefinition = [string, Router, Role?]