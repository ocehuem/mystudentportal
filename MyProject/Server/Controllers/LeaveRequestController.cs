// /Server/Controllers/LeaveRequestController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyProject.Data;
using MyProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeaveRequestController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public LeaveRequestController(ApplicationDbContext context)
        {
            _context = context;
        }

        // POST: api/leaverequests
        [HttpPost]
        public async Task<ActionResult<LeaveRequest>> PostLeaveRequest(LeaveRequest leaveRequest)
        {
            leaveRequest.CreatedAt = DateTime.Now;
            _context.LeaveRequests.Add(leaveRequest);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetLeaveRequest), new { id = leaveRequest.Id }, leaveRequest);
        }

        // GET: api/leaverequests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LeaveRequest>>> GetLeaveRequests()
        {
            return await _context.LeaveRequests.ToListAsync();
        }

        // PUT: api/leaverequests/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> ApproveLeaveRequest(int id, LeaveRequest leaveRequest)
        {
            if (id != leaveRequest.Id)
            {
                return BadRequest();
            }

            var existingRequest = await _context.LeaveRequests.FindAsync(id);
            if (existingRequest == null)
            {
                return NotFound();
            }

            existingRequest.IsApproved = leaveRequest.IsApproved;

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
